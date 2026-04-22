<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TournamentMatchResource\Pages;
use App\Filament\Resources\TournamentMatchResource\RelationManagers;
use App\Models\TournamentMatch;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TournamentMatchResource extends Resource
{
    protected static ?string $model = TournamentMatch::class;

    protected static ?string $navigationIcon = 'heroicon-o-academic-cap'; // Will try swords later if needed

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\Select::make('tournament_id')
                            ->relationship('tournament', 'title')
                            ->required(),
                        Forms\Components\Select::make('status')
                            ->options([
                                'pending' => 'Pending',
                                'ongoing' => 'Ongoing',
                                'finished' => 'Finished',
                                'cancelled' => 'Cancelled',
                            ])
                            ->required(),
                        Forms\Components\Select::make('player1_id')
                            ->relationship('player1', 'name')
                            ->searchable(),
                        Forms\Components\Select::make('player2_id')
                            ->relationship('player2', 'name')
                            ->searchable(),
                        Forms\Components\TextInput::make('score_p1'),
                        Forms\Components\TextInput::make('score_p2'),
                        Forms\Components\Select::make('winner_id')
                            ->relationship('winner', 'name')
                            ->searchable(),
                        Forms\Components\DateTimePicker::make('scheduled_at'),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('tournament.title')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('player1.name')
                    ->label('Player 1'),
                Tables\Columns\TextColumn::make('player2.name')
                    ->label('Player 2'),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'pending' => 'gray',
                        'ongoing' => 'warning',
                        'finished' => 'success',
                        'cancelled' => 'danger',
                    }),
                Tables\Columns\TextColumn::make('scheduled_at')
                    ->dateTime()
                    ->sortable(),
            ])

            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTournamentMatches::route('/'),
            'create' => Pages\CreateTournamentMatch::route('/create'),
            'edit' => Pages\EditTournamentMatch::route('/{record}/edit'),
        ];
    }
}
