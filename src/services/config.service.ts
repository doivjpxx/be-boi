import { CreateConfigDto, UpdateConfigDto } from '../models/config/config.dto';
import { configModel } from '../models/config/config.model';

export const createConfig = async (config: CreateConfigDto) => {
  await configModel.create(config);
  return config;
};

export const currentConfig = async () => {
  const config = await configModel.findOne({
    deletedAt: null,
  });

  return config;
};

export const updateConfig =
  async ({
           amountOfDate,
           amountOfHour,
           extraAmountOfDate,
           extraAmountOfHour
         }: UpdateConfigDto) => {
    const current = await currentConfig();

    current.deletedAt = new Date();

    await current.save();

    const newConfig = await configModel.create({
      amountOfDate: amountOfDate ?? current.amountOfDate,
      amountOfHour: amountOfHour ?? current.amountOfHour,
      extraAmountOfDate: extraAmountOfDate ?? current.extraAmountOfDate,
      extraAmountOfHour: extraAmountOfHour ?? current.extraAmountOfHour,
    });

    return newConfig;
  };
