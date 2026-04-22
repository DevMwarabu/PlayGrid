<?php

namespace App\Filament\Resources\ClipResource\Pages;

use App\Filament\Resources\ClipResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditClip extends EditRecord
{
    protected static string $resource = ClipResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
